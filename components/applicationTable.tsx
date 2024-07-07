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
      dateSubmitted: new Date(),
      postingDate: new Date(2024, 6, 4),
      companyName: 'Acme Corp',
      jobTitle: 'Software Engineer',
      jobLocation: 'Remote',
      postingLink: 'https://acmecorpjobs.com',
      loginInfo: 'email: temp@gmail.com. PW: getmeajob123',
      notes: '',
    },
    {
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
        postingLink: 'https://acmecorpjobs.com',
        loginInfo: 'email: temp@gmail.com. PW: getmeajob123',
        notes: '',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
      },{
        jobid: '1',
        seekerid: 'user123',
        agentid: null,
        dateSubmitted: new Date(),
        postingDate: new Date(2024, 6, 4),
        companyName: 'Acme Corp',
        jobTitle: 'Software Engineer',
        jobLocation: 'Remote',
        postingLink: 'https://acmecorpjobs.com',
        loginInfo: 'email: temp@gmail.com. PW: getmeajob123',
        notes: '',
      },
    // Add more job applications as needed
];
  
const COLUMNS = [
    { label: 'Job ID', renderCell: (item) => item.jobid, hide: true  },
    { label: 'Seeker ID', renderCell: (item) => item.seekerid, hide: true  },
    { label: 'Agent ID', renderCell: (item) => item.agentid || 'N/A', hide: true  },
    {
      label: 'Date Applied',
      renderCell: (item) =>
        item.dateSubmitted.toLocaleDateString('en-US', {
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
    { label: 'Company', renderCell: (item) => <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{item.companyName}</span> },
    { label: 'Title', renderCell: (item) => <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{item.jobTitle}</span> },
    { label: 'Location', renderCell: (item) => <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{item.jobLocation}</span> },

    { label: 'Job Link', renderCell: (item) => <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{item.postingLink}</span> },
    { label: <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{'Application Login'}</span> , renderCell: (item) => <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{item.loginInfo}</span> },
    { label: 'Agent notes', renderCell: (item) => <span style={{whiteSpace: "normal",
      wordWrap: "break-word"}}>{item.notes}</span> },
    // future label for resume used pdf download
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

