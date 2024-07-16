"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import PdfDropZone from './pdfDropZone';
import ImageDropZone from './imageDropZone';
import { toast } from 'sonner';

export function AgentProfileForm(
  { user_id, existingProfile }: 
  { user_id: string, existingProfile: any }
) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(existingProfile ? { defaultValues: existingProfile }: {});
    const [photos, setPhotos] = useState<string[]>(existingProfile?.photos || []);
    
    const onSubmit = async (data) => {
      const pendingRequest = fetch(`/api/agent/${user_id}`, {
        method: 'POST',
        body: JSON.stringify({...data, photos }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      toast.promise(pendingRequest, {
        loading: 'Updating profile...',
        success: 'Profile updated successfully!',
        error: 'Profile update failed!'
      });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
    
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div className="mt-2">
                  <input
                    id="name"
                    {...register("name", { required: true })}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="photos" className="block text-sm font-medium leading-6 text-gray-900">Photos</label>
                <div className="mt-2">
                  <ImageDropZone 
                    onFilesAdded={async (urls) => {
                      setPhotos(prev => [...prev, ...urls])
                    }}
                    onFileDelete={async (url) => setPhotos(photos.filter(photo => photo !== url))}
                    photos={photos}
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    {...register("description", { required: "Description is required" })}
                    placeholder='Tell us about yourself!'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.description && <span className="text-red-600 text-sm">Description is required</span>}
                </div>
              </div>

              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">Status</legend>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-x-2">
                    <input
                      id="active"
                      type="radio"
                      value="Active"
                      {...register("status", { required: "Status is required" })}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="active" className="block text-sm font-medium leading-6 text-gray-900">Active</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      id="inactive"
                      type="radio"
                      value="Inactive"
                      {...register("status", { required: "Status is required" })}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="inactive" className="block text-sm font-medium leading-6 text-gray-900">Inactive</label>
                  </div>
                  {errors.status && <span className="text-red-600 text-sm">Status is required</span>}
                </div>
              </fieldset>
    
            </div>
          </div>
    
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => reset()}>Cancel</button>
            <input type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" />
          </div>
        </form>
      );
}
