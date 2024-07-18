"use client"

import React from 'react'
import { useForm,  } from 'react-hook-form';
import { Tier } from '@/types';

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
            <div>
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Select a pricing tier:</label>
                    <div className="mt-2 flex space-x-10">
                        <div>
                            <input
                            id="tierI"
                            type="radio"
                            value={Tier.One}
                            {...register("pricingTier", { required: true })}
                            disabled={!existingProfile || existingProfile?.numCredits == 0}
                            className="mr-2"
                            />
                            <label htmlFor="tierI" className="text-sm font-medium leading-6 text-gray-900">Tier I - $1.49/application</label>
                            <ul style={{marginLeft: "30px"}} className="mt-1 list-disc text-sm text-gray-600">
                                <li>Chat with your agent</li>
                                <li>Finds your job or internship postings</li>
                                <li>Submits your applications</li>
                                <li>Application tracking</li>
                            </ul>
                        </div>
                        <div>
                            <input
                            id="tierII"
                            type="radio"
                            value={Tier.Two}
                            {...register("pricingTier", { required: true })}
                            disabled={!existingProfile || existingProfile?.numCredits == 0}
                            className="mr-2"
                            />
                            <label htmlFor="tierII" className="text-sm font-medium leading-6 text-gray-900">Tier II - $2.99/application</label>
                            <ul style={{marginLeft: "30px"}} className="mt-1 list-disc text-sm text-gray-600">
                                <li>Chat with your agent</li>
                                <li>Finds your job or internship postingsI</li>
                                <li>Tailors and customizes your resume</li>
                                <li>Submits your applications</li>
                                <li>Application tracking</li>
                            </ul>
                        </div>
                        {errors.pricingTier && <span className="text-red-600 text-sm">Please select a pricing tier</span>}
                    </div>
                </div>
            </div>

          
            <div>    
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="numApps" className="block text-sm font-medium leading-6 text-gray-900">How many applications do you want to do?</label>
                            <div className="mt-2">
                                <input
                                id="numApps"
                                {...register("numApps", { required: true })}
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                disabled={!existingProfile || existingProfile?.numCredits == 0}
                                />
                                {errors.numApps && <span className="text-red-600 text-sm">Number of applications is required</span>}
                            </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-start gap-x-6">
                <button type="button" disabled={!existingProfile || existingProfile?.numCredits == 0} className="text-sm font-semibold leading-6 text-gray-900" onClick={() => reset()}>Cancel</button>
                <button type="submit" disabled={!existingProfile || existingProfile?.numCredits == 0} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Create Order
                </button>
            </div>
        </form>
      );
}