class Ledger < ApplicationRecord
  belongs_to :trader
  belongs_to :commodity

  validates_uniqueness_of :trader_id, scope: :commodity_id
  validates_uniqueness_of :commodity_id, scope: :trader_id
end
