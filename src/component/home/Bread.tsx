import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
export default function Bread() {
  return (
    <div className="max-w-7xl ">
      <Breadcrumb separator="">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">所有</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">艺术</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">摄影</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
