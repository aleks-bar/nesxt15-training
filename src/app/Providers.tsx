import { Provider } from 'react-redux';
import {store} from '@/app/store';
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};