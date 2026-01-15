import { Input } from "@/src/components/ui/Input"

const AddAgent = () => {
  return (
    <div className="Add-agent mt-6 p-9 bg-white">
      <div className="header">
        <h1 className="text-4xl font-medium text-[#01D2B3]">Add Agent</h1>
        <p className="text-[#655E5E] my-2">Make Sure Your Bot Know What He Doing Next</p>
        <hr />
      </div>
      <div className="form-inputAgent">
        <div className="mt-6">
          <h1 className="mb-2.5">Nama Agent</h1>
          <Input placeholder="Masukkan Nama Agent" variant="secondary" />
        </div>
      </div>

      <div className="mt-6">
        <p>Pilih Model AI</p>
          <Input placeholder="Masukkan Nama Agent" variant="secondary" />
      </div>
    </div>
  )
}

export {AddAgent}