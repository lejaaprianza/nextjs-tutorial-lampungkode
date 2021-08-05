import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <Link href="/users">
        <a>Index</a>
      </Link>
      <br />
      <Link href="/users/kode">
        <a>Kode</a>
      </Link>
      <br />
      <Link href="/users/blog">
        <a>blog</a>
      </Link>
    </div>
  );
}
