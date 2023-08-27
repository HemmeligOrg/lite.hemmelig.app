export default function Privacy() {
  return (
    <section className="flex flex-col gap-4 my-4">
      <h1 className="text-2xl">About</h1>
      <p className="text-sm">
        Hemmelig.app LITE is a secret sharing application that allows you to
        share secrets with your friends. The secrets are encrypted with
        TweetNaCl before being added as a fragment to the URL. For more
        information about the Hemmelig, please visit{' '}
        <a
          className="underline hover:no-underline"
          href="https://github.com/HemmeligOrg/lite.Hemmelig.app"
        >
          https://github.com/HemmeligOrg/lite.Hemmelig.app
        </a>
        .
      </p>
    </section>
  );
}
