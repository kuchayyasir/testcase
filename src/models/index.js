const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ActivitySchema = new Schema(
  {
    activity_id_enc: {
      type: "String",
    },
    activity_name: {
      type: "String",
    },
    description: {
      type: "String",
    },
    visibility: {
      type: "Boolean",
    },
    manual_validation_flag: {
      type: "Boolean",
    },
    provider_name: {
      type: "String",
    },
    provider_id: {
      type: "String",
    },
    branch_name: {
      type: "String",
    },
    branch_id: {
      type: "String",
    },
    max_capacity: {
      type: "Number",
    },
    cost: {
      cost: {
        type: "Number",
      },
      currency: {
        type: "String",
      },
    },
    expected_duration: {
      duration: {
        type: "Number",
      },
      unit: {
        type: "String",
      },
    },
    address: {
      address_line_1: {
        type: "String",
      },
      street: {
        type: "String",
      },
      area: {
        type: "String",
      },
      landmark: {
        type: "Mixed",
      },
      city: {
        type: "String",
      },
      state: {
        type: "String",
      },
      country: {
        type: "String",
      },
      location: {
        latitude: {
          type: "Number",
        },
        longitude: {
          type: "Number",
        },
      },
    },
    category: {
      category_id: {
        type: "ObjectId",
      },
      category_name: {
        type: "String",
      },
      category_l1: {
        type: "String",
      },
      category_l1_id: {
        type: "String",
      },
    },
    weblinks: {
      email: {
        type: "String",
      },
      website: {
        type: "String",
      },
      facebook: {
        type: "String",
      },
      instagram: {
        type: "String",
      },
      youtube: {
        type: "String",
      },
      twitter: {
        type: "String",
      },
    },
    images: {
      type: "Array",
    },
    is_visit_flag: {
      type: "Boolean",
    },
    type: {
      type: "String",
    },
    time_slots: {
      type: ["Mixed"],
    },
    flags: {
      type: ["String"],
    },
    traits: {
      services: {
        extra_services: {
          type: ["Mixed"],
        },
        pets_allowed: {
          type: "Boolean",
        },
      },
      booking: {
        booking_requirement: {
          type: "String",
        },
      },
      age: {
        accepted_ages: {
          min: {
            type: "Date",
          },
          max: {
            type: "Date",
          },
        },
      },
      dress_code_equipment: {
        dress_code: {
          type: ["String"],
        },
      },
      payment: {
        payment_method: {
          type: ["String"],
        },
      },
      languages: {
        languages_spoken: {
          type: ["String"],
        },
      },
      parking: {
        parking_availability: {
          type: "Boolean",
        },
        valet_parking: {
          type: "Boolean",
        },
      },
      weather: {
        weather_condition_tolerant: {
          type: "Boolean",
        },
      },
    },
    source: {
      address: {
        type: "String",
      },
      time_slots: {
        type: "String",
      },
      images: {
        type: "String",
      },
    },
    ts_create: {
      type: "Date",
    },
    ts_update: {
      type: "Date",
    },
    last_updated_by: {
      type: "Mixed",
    },
    ts_etl_run: {
      type: "Date",
    },
    ts_validate: {
      type: "Date",
    },
    last_validated_by: {
      type: "String",
    },
    system_validation_flag: {
      type: "Boolean",
    },
    validity: {
      type: "Boolean",
    },
    expired: {
      type: "Boolean",
    },
    issues: {
      type: ["Mixed"],
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  ActivityModel: mongoose.model("activities", ActivitySchema),
};
