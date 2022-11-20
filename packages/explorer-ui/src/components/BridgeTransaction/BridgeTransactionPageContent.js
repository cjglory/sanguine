import { ChevronDoubleRightIcon } from '@heroicons/react/outline'

import Grid from '@tw/Grid'

import { TransactionDetails } from '@components/BridgeTransaction/TransactionDetails'
import { Indicator } from '@components/misc/StatusIndicators'
import { ContainerCard } from '@components/ContainerCard'

export function BridgeTransactionPageContent({ txn }) {
  const { status } = txn

  if (status === 'complete') {
    return <Transaction {...txn} />
  } else {
    return (
      <>
        <NotificationBanner status={status} />
        <Transaction {...txn} />
      </>
    )
  }
}

function NotificationBanner({ status }) {
  return (
    <div className="flex justify-center">
      <ContainerCard
        className="w-1/2 mt-5"
        title={`Transaction ${status}`}
        titleClassName="text-gray-400 "
        subtitle={<Indicator indicatorType={status} />}
      />
    </div>
  )
}

function Transaction(txn) {
  const { status, fromInfo, toInfo } = txn

  if (status === 'complete') {
    return (
      <div className="flex items-center justify-center mt-10 mb-10">
        <Grid gap={8} cols={{ sm: 1, md: 7, lg: 7 }}>
          <div className="col-span-3 ">
            <TransactionDetails info={fromInfo} subtitle="Origin" />
          </div>
          <div className="flex items-center justify-center lg:col-span-1">
            <ChevronDoubleRightIcon className="w-10 h-10 text-purple-500" />
          </div>
          <div className="col-span-3">
            <TransactionDetails info={toInfo} subtitle="Destination" />
          </div>
        </Grid>
      </div>
    )
  } else if (fromInfo.hash && fromInfo.address && fromInfo.chainId) {
    return (
      <div className="flex items-center justify-center mt-10 mb-10">
        <Grid gap={8} cols={{ sm: 1, md: 7, lg: 7 }}>
          <div className="col-span-3 ">
            <TransactionDetails info={fromInfo} subtitle="Origin" />
          </div>
          <div className="flex items-center justify-center lg:col-span-1">
            <ChevronDoubleRightIcon className="w-10 h-10 text-purple-500" />
          </div>
          <div className="col-span-3">
            <TransactionDetails info={toInfo} subtitle="Destination" />
          </div>
        </Grid>
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center mt-10 mb-10">
        <TransactionDetails info={toInfo} subtitle="Destination" />
      </div>
    )
  }
}