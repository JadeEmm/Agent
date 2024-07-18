"use client"

import React, { useState } from 'react'
import { useForm,  } from 'react-hook-form';
import { SeekerProfile } from '@/types';

export function OrderForm(
  { user_id, existingProfile }: 
  { user_id: string, existingProfile: any }
) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({});
    
    const onSubmit = async (data) => {
      const response = await fetch(`/api/seekerprofile/${user_id}`, {
        method: 'POST',
        body: JSON.stringify({...data}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const body = await response.json();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">    
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="numApps" className="block text-sm font-medium leading-6 text-gray-900">Number of Applications</label>
                <div className="mt-2">
                  <input
                    id="numApps"
                    {...register("numApps", { required: true })}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.numApps && <span className="text-red-600 text-sm">Number of applications is required</span>}
                </div>
              </div>
            </div>
          </div>
    
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => reset()}>Cancel</button>
            <input type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" />
          </div>
        </form>
      );
}