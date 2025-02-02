import { Field, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import FormText from '../form/FormText'
import FormSelect from '../form/FormSelect'
import FormImageSelect from '../form/FormImageSelect'
import { designElementStatusUpdate } from '../../lib/designElementStatusField'
import { getActiveDesignPhase } from '../../lib/helper'
import FormGenerateButton from './FormGenerateButton'
import FormErrorMessage from '../form/FormErrorMessage'

export default function TDF11({
  props,
  values,
  activePhase,
  reviewRequiredFields,
}) {
  // const designPhase = props.designPhases.find(
  //   (adp) => String(adp.phaseId) === '11',
  //   activePhase
  // )

  const designPhase = getActiveDesignPhase(props.designPhases, activePhase)

  const { setFieldValue, dirty } = useFormikContext()

  useEffect(() => {
    if (dirty) {
      designElementStatusUpdate(values, designPhase.phaseId, setFieldValue)
    }
  }, [dirty])

  return (
    <div className="grid w-full  gap-2 rounded-lg border-2 p-2">
      <div className="col-span-1">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          {designPhase?.name}
        </h5>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Title
        </label>

        <Field
          type="text"
          name="title"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-dao-red focus:ring-dao-red"
        />
        <FormErrorMessage
          field="title"
          reviewRequiredFields={reviewRequiredFields}
        />
      </div>

      <div className="mb-6 flex">
        <div className="mr-2 basis-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Slug
          </label>
          <p className="mb-2 text-xs font-extralight text-gray-500">
            To fetch API data, the slug needs to be API id from Coingecko.
          </p>
        </div>
        <Field
          type="text"
          name="slug"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-dao-red focus:ring-dao-red"
        />
      </div>

      <div className="mb-t flex">
        <div className="mr-2 basis-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Short Description
          </label>
          <p className="mb-2 text-xs font-extralight text-gray-500">
            Give a short summary of the project and the token/tokens.
          </p>
          <FormGenerateButton
            title={values.title}
            scope="shortDescription"
            setFieldValue={setFieldValue}
          />
          <FormErrorMessage
            field="shortDescription"
            reviewRequiredFields={reviewRequiredFields}
          />
        </div>
        <Field
          name="shortDescription"
          as={FormText}
          placeholder="Short description"
        />
        {/* <FormErrorMessage name="shortDescription" /> */}
      </div>

      <div className="mt-6 flex">
        <div className="mr-2 basis-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Ticker
          </label>
          <p className="mb-2 text-xs font-extralight text-gray-500">
            What's the ticker used for the token?
          </p>
        </div>
        <Field
          type="text"
          name="ticker"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-dao-red focus:ring-dao-red"
        />
      </div>
      <div className="mb-6 mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Categories
        </label>
        <FormErrorMessage
          field="categories"
          reviewRequiredFields={reviewRequiredFields}
        />
        <Field
          className="custom-select"
          name="categories"
          options={props.Category}
          component={FormSelect}
          placeholder="Select categories"
          isMulti={true}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Tags
        </label>
        <FormErrorMessage
          field="tags"
          reviewRequiredFields={reviewRequiredFields}
        />
        <Field
          className="custom-select"
          name="tags"
          options={props.Tag}
          component={FormSelect}
          placeholder="Select categories"
          isMulti={true}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Main Image
        </label>

        <Field
          id="mainImageUrl"
          className="custom-image"
          name="mainImageUrl"
          as={FormImageSelect}
          onChange={(e) => setFieldValue('mainImageUrl', e)}
        />
        <div className="m-5 w-[150px]">
          {values.mainImageUrl && (
            <img
              alt={`Cover Image`}
              className="m-auto rounded-lg"
              src={values.mainImageUrl}
            />
          )}
        </div>
      </div>
    </div>
  )
}
