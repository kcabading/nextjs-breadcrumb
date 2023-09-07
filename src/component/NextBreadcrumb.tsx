'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: string,
    separatorClasses?: string,
    containerClasses?: string,
    listClasses?: string
}

const NextBreadcrumb = ({homeElement, separator, separatorClasses, containerClasses, listClasses}: TBreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div>
            <ul className={containerClasses}>
                <li><Link href={'/'} className={listClasses}>{homeElement}</Link></li><span className={separatorClasses}>{separator}</span>
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    return (
                        <>
                            <li key={index} className={listClasses} >
                                {
                                    <Link href={href}>{link}</Link>
                                }
                            </li>
                            {pathNames.length !== index + 1 && <span className={separatorClasses}>{separator}</span>}
                        </>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default NextBreadcrumb