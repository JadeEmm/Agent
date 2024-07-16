"use client"

import React, { useState } from 'react'
import { useForm,  } from 'react-hook-form';
import PdfDropZone from './pdfDropZone';
import { SeekerProfile } from '@/types';
import { toast } from 'sonner';


export function SeekerProfileForm(
  { user_id, existingProfile }: 
  { user_id: string, existingProfile: any }
) {

    // const current

    const { register, handleSubmit, reset, formState: { errors } } = useForm(existingProfile ? { defaultValues: existingProfile }: {});
    const [resumes, setresumes] = useState<string[]>( existingProfile?.resumes || []);
    
    const onSubmit = async (data) => {
      const pendingRequest = fetch(`/api/seekerprofile/${user_id}`, {
        method: 'POST',
        body: JSON.stringify({...data, resumes}),
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
    
              {/* <div className="sm:col-span-4">
                <label htmlFor="photos" className="block text-sm font-medium leading-6 text-gray-900">Photos</label>
                <div className="mt-2">
                  <input
                    type="file"
                    id="photos"
                    multiple
                    {...register("photos", { required: true })}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.photos && <span className="text-red-600 text-sm">At least one photo is required</span>}
                </div>
              </div> */}
    
              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    {...register("description", { required: "Description is required" })}
                    placeholder='E.g. "Experienced software developer" or "Recent college graduate looking for a job" or "I am a software engineer with 5 years of experience in the tech industry." or "I am a recent college graduate with a degree in computer science". Tell us about yourself!'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.description && <span className="text-red-600 text-sm">Description is required to personalize your applications</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="workHistory" className="block text-sm font-medium leading-6 text-gray-900">Work History</label>
                <div className="mt-2">
                  <textarea
                    id="workHistory"
                    {...register("workHistory", { required: "Work history is required" })}
                    placeholder='E.g. "Company A: 2015-2018 Role Name, Company B: 2018-2021 Role Name"'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.workHistory && <span className="text-red-600 text-sm">Work history is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full (Legal) Name</label>
                <div className="mt-2">
                  <input
                    id="fullName"
                    {...register("fullName", { required: "Full name is required" })}
                    placeholder='Your full legal name as it appears on official documents.'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.fullName && <span className="text-red-600 text-sm">Full name is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                <div className="mt-2">
                  <input
                    id="address"
                    {...register("address", { required: "Address is required" })}
                    placeholder='Don&apos;t forget the city, state, and zip code! E.g. "123 Main St, Springfield, IL 62701"'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.address && <span className="text-red-600 text-sm">Address is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="mt-2">
                  <input
                    id="phoneNumber"
                    {...register("phoneNumber", { required: "Phone number is required" })}
                    placeholder='Your primary phone number for all your job applications.'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.phoneNumber && <span className="text-red-600 text-sm">Phone number is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="emailAddress" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                <div className="mt-2">
                  <input
                    id="emailAddress"
                    {...register("emailAddress", { required: "Email address is required", pattern: /^\S+@\S+$/i })}
                    placeholder='Your primary email address for all your job applications.'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.emailAddress && <span className="text-red-600 text-sm">Email address is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Education</label>
                <div className="mt-2">
                  <textarea
                    id="education"
                    {...register("education", { required: "Education is required" })}
                    placeholder='Include highest degree earned. Major and minor if applicable. Graduation year. School name. Etc.'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.education && <span className="text-red-600 text-sm">Education is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="relevantLinks" className="block text-sm font-medium leading-6 text-gray-900">Relevant Links</label>
                <div className="mt-2">
                  <textarea
                    id="relevantLinks"
                    {...register("relevantLinks")}
                    placeholder='LinkedIn, GitHub, personal website, etc.'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="workAuthorization" className="block text-sm font-medium leading-6 text-gray-900">Work Authorization</label>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="workAuthorization"
                    {...register("workAuthorization")}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="requiresSponsorship" className="block text-sm font-medium leading-6 text-gray-900">Requires Sponsorship</label>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="requiresSponsorship"
                    {...register("requiresSponsorship")}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="disability" className="block text-sm font-medium leading-6 text-gray-900">Disability</label>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="disability"
                    {...register("disability")}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="veteran" className="block text-sm font-medium leading-6 text-gray-900">Veteran</label>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    id="veteran"
                    {...register("veteran")}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="ethnicity" className="block text-sm font-medium leading-6 text-gray-900">Ethnicity</label>
                <div className="mt-2">
                  <input
                    id="ethnicity"
                    {...register("ethnicity", { required: "Ethnicity is required" })}
                    placeholder='E.g. "Caucasian" or "Black" or "Asian" or "Hispanic" or "Native American" or "Pacific Island" or "Other" or "Prefer not to say"' // TODO: double check
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.ethnicity && <span className="text-red-600 text-sm">Ethnicity is required</span>}
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                <div className="mt-2">
                  <input
                    id="gender"
                    {...register("gender", { required: "Gender is required" })}
                    placeholder='How do you identify? You can say write "Prefer not to say" if you prefer not to share.'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.gender && <span className="text-red-600 text-sm">Gender is required</span>}
                </div>
              </div>
    
              {/* <div className="sm:col-span-6">
                <label htmlFor="resumeLink" className="block text-sm font-medium leading-6 text-gray-900">Resume Link</label>
                <div className="mt-2">
                  <input
                    id="resumeLink"
                    {...register("resumeLink")}
                    placeholder='If you have your resume hosted anywhere, you can drop us a link! E.g. "https://example.com/resume.pdf"'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
    
              {/* <div className="sm:col-span-6">
                <label htmlFor="resumes" className="block text-sm font-medium leading-6 text-gray-900">Resumes</label>
                <div className="mt-2">
                  <input
                    type="file"
                    id="resumes"
                    multiple
                    {...register("resumes", { required: "At least one resume is required" })}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.resumes && <span className="text-red-600 text-sm">At least one resume is required</span>}
                </div>
              </div> */}
    
            <div className="sm:col-span-6">
                <label htmlFor="resumes" className="block text-sm font-medium leading-6 text-gray-900">Resumes</label>
                <div className="mt-2">
                <PdfDropZone 
                  onFilesAdded={async (urls) => {
                    setresumes(prev => [...prev, ...urls])
                  }}
                  onFileDelete={async (url) => setresumes(resumes.filter(resume => resume !== url))}
                  pdfs = {resumes}
                />
                </div>
              </div>
              

              <div className="sm:col-span-6">
                <label htmlFor="preferredLocation" className="block text-sm font-medium leading-6 text-gray-900">Preferred Location</label>
                <div className="mt-2">
                  <input
                    id="preferredLocation"
                    {...register("preferredLocation")}
                    placeholder='E.g. "San Francisco, CA" or "Remote" or multiple locations separated by commas!'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="preferredCompanySize" className="block text-sm font-medium leading-6 text-gray-900">Preferred Company Size</label>
                <div className="mt-2">
                  <input
                    id="preferredCompanySize"
                    {...register("preferredCompanySize")}
                    placeholder='E.g. "Small, Medium, Large"'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="preferredIndustry" className="block text-sm font-medium leading-6 text-gray-900">Preferred Industry</label>
                <div className="mt-2">
                  <input
                    id="preferredIndustry"
                    {...register("preferredIndustry")}
                    placeholder='E.g. "Healthcare, Finance", etc'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-6">
                <label htmlFor="preferredSalary" className="block text-sm font-medium leading-6 text-gray-900">Preferred Salary</label>
                <div className="mt-2">
                  <input
                    id="preferredSalary"
                    {...register("preferredSalary")}
                    placeholder='E.g. "$100,000 - $120,000"'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
    
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => reset()}>Cancel</button>
            <input type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" />
          </div>
        </form>
      );
}