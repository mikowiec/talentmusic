// Used to make the svelte lint shut up about not recognizing imported images

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.webp' {
  const value: any
  export = value
}

declare module '*.avif' {
  const value: unknown
  export = value
}

// If typescript ever does multi-wildcards can be replaced by *.jpg?*

declare module '*&enhanced' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}
