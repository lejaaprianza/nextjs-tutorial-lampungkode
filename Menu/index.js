import Link from "next/link";
import ngodinglampung from "./Menu.module.css";
export default function Menu() {
  return (
    <header className={ngodinglampung.container}>
      <ul className={ngodinglampung.list}>
        <li className={ngodinglampung.item}>
          <Link href="/users">
            <a>Index</a>
          </Link>
        </li>
        <li className={ngodinglampung.item}>
          <Link href="/users/kode">
            <a>Kode</a>
          </Link>
        </li>
        <li className={ngodinglampung.item}>
          <Link href="/users/blog">
            <a>blog</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
