
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
        <Image src="/logo.svg" alt="logo" height={20} width={50} />
        {children}</div>
  );  
};

export default AuthLayout;
