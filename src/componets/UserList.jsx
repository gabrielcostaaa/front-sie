import React from 'react';

function UserList({ users }) {

  return (
    <div className="bg-slate-100 rounded-lg shadow-lg">
        <ul role="list" className="divide-y divide-gray-100 list-disc pl-4 pr-4">
        {users.map(user => (
            <li key={user.user_id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{user.user_name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.user_email}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
            </div>
            </li>
        ))}
        </ul>
    </div>
  )

}

export default UserList