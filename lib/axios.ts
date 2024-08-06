import Axios from "axios";

import { toast } from "@/components/ui/use-toast";

export const axios = Axios.create({ baseURL: process.env.url });

axios.interceptors.response.use(
  (response) => response.data as never,
  (error) => {
    toast({
      title: "Error",
      description: error.response.data.title || error.message,
      variant: "destructive",
    });

    return Promise.reject(error);
  }
);
