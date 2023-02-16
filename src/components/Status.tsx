type StatusProps = {
    // USing unions we can specify only some constants value supported for a particular prop
    status: 'loading' | 'success' | 'failed'
}

const Status = (props: StatusProps) => {
    let message: string;
    if(props.status === 'loading')
        message = "Loading...."
    else if(props.status === 'success')
        message = "Data fetched successfully"
    else
        message = "Data fetching failed"
  return (
    <div>
      {message}
    </div>
  )
}

export default Status
