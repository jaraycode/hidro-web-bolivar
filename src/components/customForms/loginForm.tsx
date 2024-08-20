"use client";

import React, { useState } from 'react'
import { Form } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { UserValidationForm } from '@/lib/validations'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod';
import CustomFormField, { FormFieldType } from '@/components/customFormField';
import SubmitButton from '@/components/submitButton';
import { MdOutlineMail } from 'react-icons/md';

const LoginForm = () => {
    // const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    FormFieldType.INPUT;
    const form = useForm<z.infer<typeof UserValidationForm>>({
        resolver: zodResolver(UserValidationForm),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async () => {
        setIsLoading(true);
        setTimeout(()  => {
            setIsLoading(false);
        }, 5000)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex-1 space-y-6'>
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="jhondoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="jhondoe"
                    iconSrc="/assets/icons/lock.svg"
                    iconAlt="password"
                />
                <div className='mt-4'>
                    <SubmitButton isLoading={isLoading}>Ingresa</SubmitButton>
                </div>
            </form>
        </Form>
    );
}

export default LoginForm;

enum ResistorValues {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue= 6,
    violet = 7,
    grey = 8,
    white = 9
}

type COLORS = keyof typeof ResistorValues;

function colorCode(color: COLORS): number {
    return Number(`${ResistorValues[color]}`)
}