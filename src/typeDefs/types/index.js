const { gql } = require("apollo-server");

const tokenType = gql`
  type Token {
    token: String
  }
`;
const activityType = gql`
  type Issues {
    impact: String
    field: String
    source: String
    message: String
  }

  type Source {
    address: String
    time_slots: String
    images: String
  }

  type Weather {
    weather_condition_tolerant: Boolean
  }

  type Parking {
    parking_availability: Boolean
    valet_parking: Boolean
  }

  type Languages {
    languages_spoken: [String]
  }

  type Payment {
    payment_method: [String]
  }

  type DressCodeequipment {
    dress_code: [String]
  }

  type AcceptedAges {
    min: String
    max: String
  }

  type Age {
    accepted_ages: AcceptedAges
  }

  type Booking {
    booking_requirement: String
  }

  type ExtraServices {
    service: String
    cost: String
    currency: String
  }

  type Services {
    pets_allowed: Boolean
    extra_services: [ExtraServices]
  }

  type Traits {
    weather: Weather
    parking: Parking
    languages: Languages
    payment: Payment
    dress_code_equipment: DressCodeequipment
    age: Age
    booking: Booking
    services: Services
  }

  type EndingType {
    type: String
  }

  type TimeSlots {
    start_time: String
    end_time: String
    start_date: String
    repeat_every: Int
    repeat_frequency: String
    repeat_on: [String]
    ending_type: EndingType
  }

  type Weblinks {
    email: String
    website: String
    facebook: String
    instagram: String
    youtube: String
    twitter: String
  }

  type Category {
    category_id: String
    category_name: String
    category_l1: String
    category_l1_id: String
  }

  type Location {
    latitude: Float
    longitude: Float
  }

  type Address {
    address_line_1: String
    street: String
    area: String
    landmark: String
    city: String
    state: String
    country: String
    location: Location
  }

  type ExpectedDuration {
    duration: Int
    unit: String
  }

  type Cost {
    cost: Int
    currency: String
  }

  type Activity {
    _id: String!
    activity_id_enc: String
    activity_name: String
    description: String
    visibility: Boolean
    manual_validation_flag: Boolean
    provider_name: String
    provider_id: String
    branch_name: String
    branch_id: String
    max_capacity: Int
    is_visit_flag: Boolean
    type: String
    last_updated_by: String
    last_validated_by: String
    system_validation_flag: Boolean
    validity: Boolean
    expired: Boolean
    issues: [Issues]
    ts_validate: String
    ts_etl_run: String
    ts_update: String
    ts_create: String
    source: Source
    traits: Traits
    flags: [String]
    time_slots: [TimeSlots]
    images: [String]
    weblinks: Weblinks
    category: Category
    address: Address
    expected_duration: ExpectedDuration
    cost: Cost
  }
`;
const activityInput = gql`
  input IssuesInput {
    impact: String
    field: String
    source: String
    message: String
  }

  input SourceInput {
    address: String
    time_slots: String
    images: String
  }

  input WeatherInput {
    weather_condition_tolerant: Boolean
  }

  input ParkingInput {
    parking_availability: Boolean
    valet_parking: Boolean
  }

  input LanguagesInput {
    languages_spoken: [String]
  }

  input PaymentInput {
    payment_method: [String]
  }

  input DressCodeequipmentInput {
    dress_code: [String]
  }

  input AcceptedAgesInput {
    min: String
    max: String
  }

  input AgeInput {
    accepted_ages: AcceptedAgesInput
  }

  input BookingInput {
    booking_requirement: String
  }

  input ExtraServicesInput {
    service: String
    cost: String
    currency: String
  }

  input ServicesInput {
    pets_allowed: Boolean
    extra_services: [ExtraServicesInput]
  }

  input TraitsInput {
    weather: WeatherInput
    parking: ParkingInput
    languages: LanguagesInput
    payment: PaymentInput
    dress_code_equipment: DressCodeequipmentInput
    age: AgeInput
    booking: BookingInput
    services: ServicesInput
  }

  input EndingTypeInput {
    type: String
  }

  input TimeSlotsInput {
    start_time: String
    end_time: String
    start_date: String
    repeat_every: Int
    repeat_frequency: String
    repeat_on: [String]
    ending_type: EndingTypeInput
  }

  input WeblinksInput {
    email: String
    website: String
    facebook: String
    instagram: String
    youtube: String
    twitter: String
  }

  input CategoryInput {
    category_id: String
    category_name: String
    category_l1: String
    category_l1_id: String
  }

  input LocationInput {
    latitude: Float
    longitude: Float
  }

  input AddressInput {
    address_line_1: String
    street: String
    area: String
    landmark: String
    city: String
    state: String
    country: String
    location: LocationInput
  }

  input ExpectedDurationInput {
    duration: Int
    unit: String
  }

  input CostInput {
    cost: Int
    currency: String
  }

  input ActivityInput {
    _id: String
    activity_id_enc: String
    activity_name: String!
    description: String
    visibility: Boolean
    manual_validation_flag: Boolean
    provider_name: String
    provider_id: String
    branch_name: String
    branch_id: String
    max_capacity: Int
    is_visit_flag: Boolean
    type: String
    last_updated_by: String
    last_validated_by: String
    system_validation_flag: Boolean
    validity: Boolean
    expired: Boolean
    issues: [IssuesInput]
    ts_validate: String
    ts_etl_run: String
    ts_update: String
    ts_create: String
    source: SourceInput
    traits: TraitsInput
    flags: [String]
    time_slots: [TimeSlotsInput]
    images: [String]
    weblinks: WeblinksInput
    category: CategoryInput
    address: AddressInput
    expected_duration: ExpectedDurationInput
    cost: CostInput
  }
`;

module.exports = {
  tokenType,
  activityType,
  activityInput,
};
