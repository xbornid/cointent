import { AuthKitProvider } from '@farcaster/auth-kit';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthKitProvider>
      <Component {...pageProps} />
    </AuthKitProvider>
  );
}
