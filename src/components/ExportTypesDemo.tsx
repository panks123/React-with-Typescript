import { ExportTypeDemoProps } from './ExportTypesDemo.types'

const ExportTypesDemo = (props: ExportTypeDemoProps) => {
  return (
    <div>
        {props.name} {props.salary}
    </div>
  )
}

export default ExportTypesDemo
