/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'tar',resource_description : "only for driveway sealing" },
    {resource_name: 'window'},
    {resource_name: 'air dam',resource_description : "used to prevent airflow in window"},
    {resource_name: 'caulk',resource_description : "used for sealing" },
  ]);
};
