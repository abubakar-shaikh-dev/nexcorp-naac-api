const {
  ExecutiveSummary,
  BasicInformation,
  ForCommunication,
  StatusOfInstitution,
  TypeOfInstitution
} = require("../models");
const { StatusCodes } = require("http-status-codes");

//EXECUTIVE SUMMARY
async function createExecutiveSummary(req, res) {
  const {
    introductory_note,
    criterion_wise_summary,
    strength_weaknesses_opportunities_and_challenges,
    additional_information,
    over_all_conclusive_explication,
    academic_year,
    status,
  } = req.body;

  try {
    await ExecutiveSummary.create({
      introductory_note,
      criterion_wise_summary,
      strength_weaknesses_opportunities_and_challenges,
      additional_information,
      over_all_conclusive_explication,
      academic_year,
      status,
    });
    return res.status(StatusCodes.CREATED).json({ msg: "Created" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error });
  }
}

async function updateExecutiveSummary(req, res) {
  const { id } = req.params;

  const {
    introductory_note,
    criterion_wise_summary,
    strength_weaknesses_opportunities_and_challenges,
    additional_information,
    over_all_conclusive_explication,
    academic_year,
    status,
  } = req.body;

  try {
    const executive_summary = await ExecutiveSummary.findOne({
      where: {
        id: id,
      },
    });

    if (!executive_summary) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Executive summary not found" });
    }

    executive_summary.introductory_note = introductory_note;
    executive_summary.criterion_wise_summary = criterion_wise_summary;
    executive_summary.strength_weaknesses_opportunities_and_challenges =
      strength_weaknesses_opportunities_and_challenges;
    executive_summary.additional_information = additional_information;
    executive_summary.over_all_conclusive_explication =
      over_all_conclusive_explication;
    executive_summary.academic_year = academic_year;
    executive_summary.status = status;

    await executive_summary.save();

    return res.status(StatusCodes.OK).json({ msg: "Updated" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function getExecutiveSummary(req, res) {
  try {
    const data = await ExecutiveSummary.findAll();
    return res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

//BASIC INFORMATION
async function createBasicInformation(req, res) {
  const { name, address, city, state, pin, website, status } = req.body;

  try {
    await BasicInformation.create({
      name,
      address,
      city,
      state,
      pin,
      website,
      status,
    });

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Basic-information-created" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function updateBasicInformation(req, res) {
  const { name, address, city, state, pin, website, status } = req.body;
  const basicInformationId = req.params.id;

  try {
    const basicInfo = await BasicInformation.findByPk(basicInformationId);

    if (!basicInfo) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Basic information not found" });
    }

    basicInfo.name = name;
    basicInfo.address = address;
    basicInfo.city = city;
    basicInfo.state = state;
    basicInfo.pin = pin;
    basicInfo.website = website;
    basicInfo.status = status;

    await basicInfo.save();

    return res
      .status(StatusCodes.OK)
      .json({ msg: "Basic information updated" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function getAllBasicInformation(req, res) {
  try {
    const basicInformationList = await BasicInformation.findAll();

    return res.status(StatusCodes.OK).json(basicInformationList);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

//FOR COMMUNICATION
async function createForCommunication(req, res) {
  const {
    designation,
    name,
    telephone,
    mobile,
    fax,
    email,
    status,
    institutionId,
  } = req.body;

  try {
    const institution = await BasicInformation.findByPk(institutionId);

    if (!institution) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Institution not found" });
    }

    await ForCommunication.create({
      designation,
      name,
      telephone,
      mobile,
      fax,
      email,
      status,
      institutionId,
    });

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "For communication created" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function updateForCommunication(req, res) {
  const { id } = req.params; // Assuming the "id" is passed as a parameter in the request

  const {
    designation,
    name,
    telephone,
    mobile,
    fax,
    email,
    status,
    institutionId,
  } = req.body;

  try {
    const forCommunication = await ForCommunication.findByPk(id);

    if (!forCommunication) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "For communication not found" });
    }

    // Update the fields with new values
    forCommunication.designation = designation;
    forCommunication.name = name;
    forCommunication.telephone = telephone;
    forCommunication.mobile = mobile;
    forCommunication.fax = fax;
    forCommunication.email = email;
    forCommunication.status = status;
    forCommunication.institutionId = institutionId;

    await forCommunication.save();

    return res
      .status(StatusCodes.OK)
      .json({ msg: "For communication updated" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function getForCommunicationById(req, res) {
  const { id } = req.params; // Assuming the "id" is passed as a parameter in the request

  try {
    // Fetch the specific "ForCommunication" record by its ID
    const forCommunication = await ForCommunication.findByPk(id);

    if (!forCommunication) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "For communication not found" });
    }

    return res.status(StatusCodes.OK).json(forCommunication);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function getAllForCommunications(req, res) {
  try {
    // Fetch all "ForCommunication" records
    const forCommunications = await ForCommunication.findAll();

    return res.status(StatusCodes.OK).json(forCommunications);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

//STATUS OF INSTITUTION
async function createStatusOfInstitution(req, res) {
  const { status, institutionId } = req.body;

  try {
    const institution = await BasicInformation.findByPk(institutionId);

    if (!institution) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Institution not found" });
    }

    await StatusOfInstitution.create({
      status,
      institutionId,
    });

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Status of institution created" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function updateStatusOfInstitution(req, res) {
  const { id } = req.params; // Assuming the "id" is passed as a parameter in the request
  const { status, institutionId } = req.body;

  try {
    const statusOfInstitution = await StatusOfInstitution.findByPk(id);

    if (!statusOfInstitution) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Status of institution not found" });
    }

    // Update the fields with new values
    statusOfInstitution.status = status;
    statusOfInstitution.institutionId = institutionId;

    await statusOfInstitution.save();

    return res
      .status(StatusCodes.OK)
      .json({ msg: "Status of institution updated" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server Error", error: error.message });
  }
}

async function getStatusOfInstitutionById(req,res){
  const { id } = req.params; // Assuming the "id" is passed as a parameter in the request
  try {
    // Fetch the specific "StatusOfInstitution" record by its ID
    const statusOfInstitution = await StatusOfInstitution.findByPk(id);
    if (!statusOfInstitution) {
      return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Status of institution not found" });
    }
    return res.status(StatusCodes.OK).json(statusOfInstitution);
    
  } catch (error) {
    return res
     .status(StatusCodes.INTERNAL_SERVER_ERROR)
     .json({ msg: "Server Error", error: error.message });
  
  }
}

async function getAllStatusOfInstitution(req, res) {
  try {
    // Fetch all "StatusOfInstitution" records
    const statusOfInstitutions = await StatusOfInstitution.findAll();
    return res.status(StatusCodes.OK).json(statusOfInstitutions);
    
  } catch (error) {
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Server Error", error: error.message });
  }
}

//TYPE OF INSTITUTION
async function createTypeOfInstitution(req,res){
  const { gender,shift, institutionId } = req.body;

  try {
    const institution = await BasicInformation.findByPk(institutionId);
    if (!institution) {
      return res
     .status(StatusCodes.NOT_FOUND)
     .json({ msg: "Institution not found" });
    }
    await TypeOfInstitution.create({
      gender,
      shift,
      institutionId,
    });
    return res
    .status(StatusCodes.CREATED).json({ msg: "Type of institution created" });
  } catch (error) {
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Server Error", error: error.message });
  

  }
}

module.exports = {
  createExecutiveSummary,
  updateExecutiveSummary,
  getExecutiveSummary,
  createBasicInformation,
  updateBasicInformation,
  getAllBasicInformation,
  createForCommunication,
  updateForCommunication,
  getForCommunicationById,
  getAllForCommunications,
  createStatusOfInstitution,
  updateStatusOfInstitution,
  getStatusOfInstitutionById,
  getAllStatusOfInstitution,
  createTypeOfInstitution,
};
