export default function Privacy() {
  return (
    <section className="flex flex-col gap-4 my-4">
      <h1 className="text-2xl">Privacy</h1>

      <h2 className="text-xl">Is my data secure?</h2>
      <p className="text-sm">
        Hemmelig is encrypting every message with TweetNACL in the browser. If
        you provide it with a password, it will be part of the encryption key.
        The password is not stored anywhere. The secret and the decryption key
        is part of the URL as hashes/fragments. This means that the secret is
        never sent to the server, and the server does not know the decryption
        key. The secret is only available to the people that have the URL.
      </p>

      <h2 className="text-xl">Do you track me?</h2>
      <p className="text-sm">
        We do not track anything. Hemmelig cares strongly about your privacy.
        Future wise we might track the status of how many secrets that are being
        created, which is not personal data, and will be publicly available on
        this site.
      </p>
    </section>
  );
}
