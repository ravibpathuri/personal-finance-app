import { Button, HStack, Stack } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        {session?.user?.name}
        <br />
        {session?.user?.image}
        <br />
        {session?.user?.image && <img src={session?.user?.image} alt="" />}
        <HStack>
          <Button colorScheme="red" onClick={() => signOut()}>
            Sign out
          </Button>
        </HStack>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <HStack>
        <Button colorScheme="green" onClick={() => signIn()}>
          Login
        </Button>
      </HStack>
    </>
  );
}
