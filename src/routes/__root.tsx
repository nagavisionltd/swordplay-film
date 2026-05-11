import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Scene not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This take didn't make the final cut.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
          Back to Hero
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something broke on set.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Retry</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SWORDPLAY — A Femi Wilhelm Film | June 19, 2026" },
      { name: "description", content: "Loyalty, jealousy, betrayal. Inspired by Shakespeare's Othello, SWORDPLAY drops on Amazon Prime Video and Fandango at Home — June 19, 2026." },
      { name: "author", content: "Buffalo 8 / BondIt Media Capital" },
      { property: "og:title", content: "SWORDPLAY — A Femi Wilhelm Film | June 19, 2026" },
      { property: "og:description", content: "Loyalty, jealousy, betrayal. Inspired by Shakespeare's Othello, SWORDPLAY drops on Amazon Prime Video and Fandango at Home — June 19, 2026." },
      { property: "og:type", content: "video.movie" },
      { property: "og:image", content: "https://i.ytimg.com/vi/jJRNTFBZPOw/maxresdefault.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://i.ytimg.com/vi/jJRNTFBZPOw/maxresdefault.jpg" },
      { name: "twitter:title", content: "SWORDPLAY — A Femi Wilhelm Film | June 19, 2026" },
      { name: "twitter:description", content: "Loyalty, jealousy, betrayal. Inspired by Shakespeare's Othello, SWORDPLAY drops on Amazon Prime Video and Fandango at Home — June 19, 2026." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
