import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/global/dashNavbar";
import GradientBackground from "@/components/global/GradientBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <SignedOut>
        <div className="centered-body">
        <GradientBackground/>
        <SignIn routing="hash" forceRedirectUrl="/dashboard/#" />
        </div>
      </SignedOut>
      <SignedIn>
        <Navbar />
        {children}
        <UserButton showName/>
        <SignOutButton redirectUrl="/"/>
      </SignedIn>
    </ClerkProvider>
  );
}
