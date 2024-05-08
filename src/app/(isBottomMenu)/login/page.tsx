'use client';

import Button from '@/components/button/Button';
import { setCookie } from '@/util/authCookie';
import React from 'react';
import { useForm } from 'react-hook-form';

const Index = () => {

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<formType>({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log('dd', data);
    // TEST: 임시 저장
    if(data.id == '1111' && data.password == 'a111') {
      setCookie('atk', 'atk');
      console.log('atk임시 저장')
    }
  };

  return (
    <div>
      카카오 로그인, <br />
      구글 로그인
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="username"
          placeholder={"아이디를 입력해주세요"}
          maxLength={10}
          {...register("id", {
            required: "아이디는 필수 입력입니다.",
            minLength: {
              value: 2,
              message: "2자리 이상 입력해주세요.",
            },
          })}
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          minLength={4}
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 4,
              message: "4자리 이상 입력해주세요.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
              message: "영어와 숫자를 포함해주세요",
            },
          })}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Index;