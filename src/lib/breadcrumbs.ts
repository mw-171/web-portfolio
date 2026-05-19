export type BreadcrumbItem = {
  label: string;
  href: string;
};

type GetBreadcrumbsOptions = {
  page?: string;
  title?: string;
  from?: string | undefined;
  // fallback path segments when router isn't passed
  path?: string;
};

export function getArtBreadcrumbs(from: string | undefined): BreadcrumbItem[] {
  if (from === "about") {
    return [
      { label: "about", href: "/about" },
      { label: "art", href: "/art" },
    ];
  }

  if (from === "portfolio") {
    return [
      { label: "portfolio", href: "/portfolio" },
      { label: "art", href: "/art" },
    ];
  }

  return [{ label: "art", href: "/art" }];
}

export function getPortfolioBreadcrumbs(from: string | undefined): BreadcrumbItem[] {
  if (from === "about") {
    return [
      { label: "about", href: "/about" },
      { label: "portfolio", href: "/portfolio" },
    ];
  }

  if (from === "art") {
    return [
      { label: "art", href: "/art" },
      { label: "portfolio", href: "/portfolio" },
    ];
  }

  return [{ label: "portfolio", href: "/portfolio" }];
}

export function getAboutBreadcrumbs(from: string | undefined): BreadcrumbItem[] {
  if (from === "portfolio") {
    return [
      { label: "portfolio", href: "/portfolio" },
      { label: "about", href: "/about" },
    ];
  }

  if (from === "art") {
    return [
      { label: "art", href: "/art" },
      { label: "about", href: "/about" },
    ];
  }

  return [{ label: "about", href: "/about" }];
}

export function getMeBreadcrumbs(from: string | undefined): BreadcrumbItem[] {
  if (from === "about") {
    return [
      { label: "about", href: "/about" },
      { label: "details!", href: "/me" },
    ];
  }

  return [{ label: "details!", href: "/me" }];
}

export function getProjectsBreadcrumbs(): BreadcrumbItem[] {
  return [{ label: "projects", href: "/projects" }];
}

export function getArtDetailBreadcrumbs(from: string | undefined, title?: string): BreadcrumbItem[] {
  const label = title || "untitled";
  const href = `/art/${encodeURIComponent(label)}`;

  if (from === "about") {
    return [
      { label: "about", href: "/about" },
      { label: "art", href: "/art" },
      { label, href },
    ];
  }

  if (from === "portfolio") {
    return [
      { label: "portfolio", href: "/portfolio" },
      { label: "art", href: "/art" },
      { label, href },
    ];
  }

  return [
    { label: "art", href: "/art" },
    { label, href },
  ];
}

export function getBreadcrumbs(opts: GetBreadcrumbsOptions): BreadcrumbItem[] {
  if (opts.page === "artDetail") {
    return getArtDetailBreadcrumbs(opts.from, opts.title);
  }
  if (opts.page === "art") {
    return getArtBreadcrumbs(opts.from);
  }
  if (opts.page === "portfolio") {
    return getPortfolioBreadcrumbs(opts.from);
  }
  if (opts.page === "about") {
    return getAboutBreadcrumbs(opts.from);
  }
  if (opts.page === "me") {
    return getMeBreadcrumbs(opts.from);
  }
  if (opts.page === "projects") {
    return getProjectsBreadcrumbs();
  }

  // Generic fallback: build from a provided path or default to '/'
  const path = opts.path || "/";
  const clean = path.split("?")[0].replace(/(^\/|\/$)/g, "");
  if (!clean) return [];

  const parts = clean.split("/");
  const items: BreadcrumbItem[] = [];
  let acc = "";

  parts.forEach((p) => {
    acc += `/${p}`;
    items.push({ label: decodeURIComponent(p), href: acc });
  });

  return items;
}
