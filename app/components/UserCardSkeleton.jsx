import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserCardSkeleton = () => {
    return (
        <div className="flex w-full p-4 bg-slate-50 shadow-sm rounded-md items-center gap-4">
            <Skeleton height={100} width={100} borderRadius={100} />
            <div className="w-40">
                <Skeleton count={2} />
            </div>
        </div>
    )
}

export default UserCardSkeleton