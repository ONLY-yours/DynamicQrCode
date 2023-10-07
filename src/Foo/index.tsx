import { QRCodeSVG } from 'qrcode.react';
import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = () => {
  return <QRCodeSVG value="https://reactjs.org/" />;
};

export default Foo;
