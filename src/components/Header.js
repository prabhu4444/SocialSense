import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white ">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-lg font-nomal">Social Sense Task</h1>
        <nav className=" flex w-full justify-evenly">
          <div className="mx-2">
            <Link href="/theme1">
              <span className="text-white  hover:underline">Theme 1</span>
            </Link>
          </div>
          <div className="mx-2">
            <Link href="/theme2">
              <span className="text-white hover:underline">Theme 2</span>
            </Link>
          </div>
          <div className="mx-2">
            <Link href="/theme3">
              <span className="text-white hover:underline">Theme 3</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
