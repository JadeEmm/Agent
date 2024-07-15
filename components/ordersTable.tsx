"use client"

import React from 'react'
import { CompactTable } from "@table-library/react-table-library/compact"
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
  
const COLUMNS = [
    { label: <span style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Number of applications</span>, renderCell: (item) => item.numApps  },
    { label: <span style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Number of applications completed</span>, renderCell: (item) => item.numAppsCompleted  },
    { label: 'Status', renderCell: (item) => item.status  },
    { label: 'Tier', renderCell: (item) => item.tier  },
];

export function OrdersTable({ orders }) {
    const theme = useTheme(getTheme());

    return (
        <div className='w-full h-full p-6'>
            <CompactTable
                columns={COLUMNS}
                data={{ nodes: orders }}
                theme={theme}
                layout={{ fixedHeader: true }}
            />
        </div>
    )
}

