import { SecretForm } from '../components/secret-form';

export default function Home() {
  return (
    <section className="flex items-center flex-col">
      <h1 className="text-2xl text-center font-bold m-4">
        Paste a password, secret message, or private information.
      </h1>

      <p className="text-sm text-center mb-4">
        Keep your sensitive information out of chat logs, emails, and more with
        encrypted secrets.
      </p>

      <SecretForm />
    </section>
  );
}
