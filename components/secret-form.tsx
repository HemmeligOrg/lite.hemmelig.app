'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import passwordGenerator from 'generate-password-browser';

import { generateKey, encrypt } from '../app/utils/tweetnacl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const FormSchema = z.object({
  secret: z
    .string()
    .min(1, {
      message: 'Sensitive information is required.',
    })
    .max(1425),
  password: z.string().min(5).max(30).default('').optional(),
  secretUrl: z.string().optional(),
});

export function SecretForm() {
  const [decryptionKey, setDecryptionKey] = useState<string>('');
  const [secretUrl, setSecretUrl] = useState<string>('');

  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (decryptionKey) {
      return;
    }

    const pw = data?.password ? data.password : '';
    const userDecryptionKey = generateKey(pw);

    setDecryptionKey(userDecryptionKey);

    const secret = encrypt(data.secret, userDecryptionKey + pw);

    form.setValue('secretUrl', getSecretURL(secret, userDecryptionKey));

    setSecretUrl(getSecretURL(secret, userDecryptionKey));
  }

  function onPasswordClick() {
    if (form.getValues('password') || decryptionKey) {
      return;
    }

    form.setValue(
      'password',
      passwordGenerator.generate({
        length: 30,
        numbers: true,
        strict: true,
        symbols: false,
      })
    );
  }

  function onSecretUrlClick(event: React.MouseEvent<HTMLInputElement>) {
    event.currentTarget.select();

    navigator.clipboard.writeText(secretUrl);

    toast({
      title: 'URL copied to your clipboard',
      description: secretUrl,
      action: <></>,
    });
  }

  const getSecretURL = (secret: string, decryptionKey: string): string => {
    return `${window.location.origin}/sensitive#secret=${secret}#decryption_key=${decryptionKey}`;
  };

  function onShare(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();

    if (navigator.share) {
      navigator
        .share({
          title: 'lite.hemmelig.app',
          text: 'Check out this secret message I sent you.',
          url: secretUrl,
        })
        .then(() => console.log('Successfully shared secret.'))
        .catch(console.error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="secret"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Write the sensitive information you want to share here."
                  className="min-h-[160px]"
                  readOnly={decryptionKey ? true : false}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Password"
                  className="resize-none"
                  onClick={onPasswordClick}
                  readOnly={decryptionKey ? true : false}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {decryptionKey && (
          <div className="flex w-full items-end space-x-2">
            <div className="w-full space-y-6">
              <FormField
                control={form.control}
                name="secretUrl"
                render={({ field }) => (
                  <FormItem className="flex gap-2 flex-col">
                    <FormLabel className="font-normal">
                      Your secret URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        type="text"
                        onClick={onSecretUrlClick}
                        readOnly
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {navigator.share && (
              <Button onClick={onShare}>
                <Icons.share className="mr-2" width={16} height={16} />
                Share
              </Button>
            )}
          </div>
        )}

        <div className="flex flex-col items-center gap-y-4">
          <p className="text-sm text-center">
            The secret is encrypted, and is part of the URL. The decryption key
            will be a fragment that is not read by the server. If you use a
            password, it will be part of the decryption key, and not saved
            anywhere.
          </p>
          <p className="text-sm text-center">
            <strong>Hemmelig</strong>, [he`m:(ə)li], means secret in Norwegian.
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant={decryptionKey ? 'secondary' : ''}
            readOnly={decryptionKey ? true : false}
          >
            Create a secret link
          </Button>
        </div>
      </form>
    </Form>
  );
}
