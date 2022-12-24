import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Twitter auth test</title>
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "32px",
          maxWidth: "500px",
        }}
      >
        {session ? (
          <>
            Signed in as
            <pre>
              <code>{JSON.stringify(session, null, 2)}</code>
            </pre>
            <br />
            <button onClick={() => signOut()}>Sign out</button>
            <button onClick={() => fetch("api/session")}>
              get session in server side
            </button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </main>
    </>
  );
}
