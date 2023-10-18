const {
  ExecutiveSummary,
  BasicInformation,
  ForCommunication,
} = require("../models");
const { StatusCodes } = require("http-status-codes");

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
      institutionId: institutionId.id,
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

module.exports = {
  createExecutiveSummary,
  updateExecutiveSummary,
  getExecutiveSummary,
  createBasicInformation,
  updateBasicInformation,
  getAllBasicInformation,
  createForCommunication,
};
