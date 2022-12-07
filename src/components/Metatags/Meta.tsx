import Head from "next/head";
import { FC } from "react";

const Meta: FC = () => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <title>Yasin Can | Front End Developer</title>
      <meta
        name='description'
        content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
      />
      <meta property='og:url' content='https://yasincan.me' />
      <meta property='og:title' content='Yasin Can | Front End Developer' />
      <link rel='apple-touch-icon' href='/assets/apple-touch-icon.png' />
      <meta
        name='description'
        content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
      />
      <meta property='og:url' content='https://yasincan.me' />
      <meta property='og:title' content='Yasin Can | Front End Developer' />
      <meta
        property='og:description'
        content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
      />
      <meta property='og:image' content='/assets/meta-image.png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content='https://yasincan.me' />
      <meta name='twitter:title' content='Yasin Can | Front End Developer' />
      <meta
        name='twitter:description'
        content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
      />
    </Head>
  );
};

export default Meta;
