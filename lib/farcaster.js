
import { AuthKitProvider, useAuthSigner, useViewerConnection } from '@farcaster/auth-kit';

export function FarcasterLoginButton() {
  const [_, connect] = useViewerConnection();
  const { signer } = useAuthSigner();

  const handleLogin = async () => {
    const res = await connect();
    console.log("Farcaster connected:", res);
    console.log("Signer:", signer);
  };

  return (
    <button onClick={handleLogin} className="px-4 py-2 bg-purple-600 text-white rounded-md">
      Login with Farcaster
    </button>
  );
}
