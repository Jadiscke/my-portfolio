const basePath = "/my-portfolio";

export default function ghPagesLoader({ src }: { src: string }): string {
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}
