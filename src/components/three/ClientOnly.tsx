import { lazy, Suspense, useEffect, useState, type ComponentType } from "react";

export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}

/**
 * Creates a lazy-loaded wrapper for a Three.js component.
 * The component module (and its heavy three/r3f deps) is only fetched
 * when the wrapper first mounts, keeping the initial bundle small.
 */
export function lazyThree<P extends object>(
  factory: () => Promise<{ default: ComponentType<P> } | { [key: string]: ComponentType<P> }>,
  exportName?: string,
) {
  const LazyComp = lazy(() =>
    factory().then((mod) => {
      if ("default" in mod) return mod as { default: ComponentType<P> };
      const name = exportName ?? Object.keys(mod)[0];
      return { default: (mod as Record<string, ComponentType<P>>)[name] };
    }),
  );

  return function LazyThreeWrapper(props: P) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
      <Suspense fallback={null}>
        <LazyComp {...props} />
      </Suspense>
    );
  };
}
