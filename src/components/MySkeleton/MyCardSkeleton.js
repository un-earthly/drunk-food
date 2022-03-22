import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MyCardSkeleton() {
    return (
        <div style={{marginTop:'20px'}}>
            <div style={{ height: '330px' , borderTop:'0'}} className='card p-0 text-center bg-transparent  text-white shadow-lg shadow-none rounded'>
                <SkeletonTheme highlightColor={'cyan'} baseColor={'#0dcaf0'} >
                    <Skeleton height={60} />
                    <Skeleton style={{ margin: '15px' }} circle={true} height={150} width={150} borderRadius={5} />
                    <Skeleton style={{ margin: '5px' }} height={15} borderRadius={5} width={320} />
                    <Skeleton style={{ margin: '5px' }} height={40} borderRadius={5} width={130} />
                </SkeletonTheme>
            </div>
        </div>
    )
}
