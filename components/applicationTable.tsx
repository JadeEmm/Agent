"use client"

import React from 'react'
import { CompactTable } from "@table-library/react-table-library/compact"
import { useTheme } from "@table-library/react-table-library/theme";
import { JobApplicationModel } from '@/schemas/jobApplication'
import { getTheme } from "@table-library/react-table-library/baseline";

// import { getServerSession } from 'next-auth'
// import { authOptions } from "../app/api/auth/[...nextauth]/route"

const jobApplications = [
    {
      jobid: '1',
      seekerid: 'user123',
      agentid: null,
      date: new Date(),
      postingDate: new Date(2024, 6, 4),
      companyName: 'Acme Corp',
      jobTitle: 'Software Engineer',
      jobLocation: 'Remote',
    },
    {
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        date: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },
    // Add more job applications as needed
];
  
const COLUMNS = [
    { label: 'Job ID', renderCell: (item) => item.jobid, hide: true  },
    { label: 'Seeker ID', renderCell: (item) => item.seekerid, hide: true  },
    { label: 'Agent ID', renderCell: (item) => item.agentid || 'N/A', hide: true  },
    {
      label: 'Date',
      renderCell: (item) =>
        item.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    {
      label: 'Posting Date',
      renderCell: (item) =>
        item.postingDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Company Name', renderCell: (item) => item.companyName },
    { label: 'Job Title', renderCell: (item) => item.jobTitle },
    { label: 'Job Location', renderCell: (item) => item.jobLocation },
];

export async function ApplicationTable({ userid }) {

    const data = { nodes: jobApplications };
    const theme = useTheme(getTheme());

    // TODO: This wont work right now as we dont have any user / seeker id, and thus no job postings. It will throw a key error for now.
    // const myAppliedJobs = await JobApplicationModel.find({
    //     seekerid: userid
    // }) 

    return (
        <div className='w-full h-full p-6'>
            <CompactTable
                columns={COLUMNS}
                data={data}
                theme={theme}
                layout={{ fixedHeader: true }}
            />
        </div>
    )
}

