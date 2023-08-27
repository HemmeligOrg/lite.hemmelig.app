'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { getFragment, getSensitiveContent } from '@/lib/utils';

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Sensitive() {
  const [open, setOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [decryptionKey = ''] = getFragment('decryption_key');
  const [secret = ''] = getFragment('secret');

  const sensitive = getSensitiveContent(secret, decryptionKey + password);

  const onSetPassword = (event: React.KeyboardEvent<HTMLInputElement>) =>
    setPassword(event.currentTarget.value);

  return (
    <section className="flex items-center flex-col">
      <h1 className="text-2xl text-center font-bold m-4">
        View your secret message.
      </h1>

      <p className="text-sm text-center mb-4">
        Keep your sensitive information out of chat logs, emails, and more with
        encrypted secrets.
      </p>

      <div className="w-full relative">
        {!open && (
          <div className="flex min-h-[160px] w-full absolute backdrop-blur-sm items-center justify-center">
            <Button onClick={() => setOpen(true)} variant="outline">
              <Icons.unlock className="mr-2" width={12} height={12} />
              Show secret
            </Button>
          </div>
        )}
        <Textarea
          className="min-h-[160px]"
          readOnly
          value={open ? sensitive : ''}
          placeholder={LOREM_IPSUM}
        />
      </div>

      <div className="grid w-full items-center gap-1 my-4">
        <Input placeholder="Password" type="password" onKeyUp={onSetPassword} />
        {!sensitive && open && (
          <p className="text-red-500 text-sm p-2">
            [!] Couldn&apos;t decrypt the secret. Missing the password?
          </p>
        )}
      </div>

      {open && (
        <div className="flex w-full justify-end">
          <Button>
            <Link href="/" type="button">
              Create a new secret
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
