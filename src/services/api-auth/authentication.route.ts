import axios from "axios";
import {
  LoginProps,
  OtpCodeProps,
  PostCurrentUser,
  RegisterProps,
  UpdatePassworduser,
  VerifPassword,
} from "@/src/model/authentication.model";
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const Register = async (data: RegisterProps) => {
  try {
    const response = await axios.post(`${endpoint}/auth/register`, data);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const Login = async (data: LoginProps) => {
  try {
    const response = await axios.post(`${endpoint}/auth/login`, data);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const otpCode = async (data: OtpCodeProps) => {
  try {
    const response = await axios.post(
      `${endpoint}/auth/otp-verification`,
      data,
    );
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const logOut = async () => {
  try {
    const response = await axios.post(`${endpoint}/auth/logout`);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const refreshToken = async () => {
  try {
    const response = await axios.get(`${endpoint}/auth/refresh`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${endpoint}/api/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const updateUser = async (req: PostCurrentUser) => {
  const { id, ...user } = req;
  try {
    const response = await axios.patch(`${endpoint}/api/user/${id}`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
export const verifPasswordOtp = async (req: VerifPassword) => {
  const { id, ...user } = req;
  try {
    const response = await axios.post(`${endpoint}/api/user/sendOtp`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
export const forgotPassword = async (req: UpdatePassworduser) => {
  const { id, ...user } = req;
  try {
    const response = await axios.post(`${endpoint}/api/user/password`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const GoogleOauth = async () => {
  window.location.href = `${endpoint}/auth/google/login`;
};

export const FacebookOauth = async () => {
  window.location.href = `${endpoint}/auth/google/login`;
};
