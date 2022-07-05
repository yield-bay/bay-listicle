import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans text-neutral-800 bg-white dark:bg-neutral-900 transition duration-200 dark:text-neutral-200">
      <div className="flex flex-col flex-1">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
