import { Field, useFormikContext } from 'formik'
import ResourceSection from './ResourceSection'
import { getActiveDesignPhase } from '../../lib/helper'
import { designElementStatusUpdate } from '../../lib/designElementStatusField'
import { useEffect } from 'react'
import WalkthroughSection from './WalkthroughSection'

export default function TDF105({ props, values, activePhase }) {
  const designPhase = getActiveDesignPhase(props.designPhases, activePhase)

  const { setFieldValue } = useFormikContext()

  useEffect(() => {
    designElementStatusUpdate(values, designPhase.phaseId, setFieldValue)
  }, [])

  return (
    <div className="flex flex-col">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
        {designPhase.name}
      </h5>
      <Field
        as="textarea"
        rows="6"
        name={`DesignElement.${values?.DesignElement?.findIndex(
          (de) => de.designPhasesId.toString() === designPhase.phaseId
        )}.content`} //
        placeholder="Token Evaluation"
        phaseId={designPhase.phaseId}
        className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-dao-red focus:ring-dao-red"
      />
      <ResourceSection content={designPhase.Resources} />
      <WalkthroughSection />
    </div>
  )
}
