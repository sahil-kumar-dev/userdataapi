import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Image from 'next/image';

export default function UserCard({ avatar, jobTitle, profile, setId, id }) {
    return (
        <div className='flex items-center bg-slate-400 p-4 rounded-lg shadow-lg w-full gap-4 cursor-pointer overflow-hidden' onClick={() => setId(id)}>
            <div className='flex-shrink-0'>
                <Image
                    src={avatar || '/usernotfound.png'}
                    alt='Avatar'
                    height={100}
                    width={100}
                    className='rounded-full'
                />
            </div>
            <div className="space-y-4">
                <h1 className='font-bold text-white text-lg overflow-ellipsis'>{profile?.username}</h1>
                <p className='text-gray-700 text-sm font-medium'>{jobTitle}</p>
            </div>
        </div>
    );
}
